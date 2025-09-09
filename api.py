from flask import Flask, request, jsonify
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
llm = ChatGoogleGenerativeAI(model="gemini-pro", temperature=0.7)

@app.route('/api/prophecy', methods=['POST'])
def generate_prophecy():
    data = request.json
    idea = data.get('idea', '')
    industry = data.get('industry', '')
    
    prompt = PromptTemplate(
        input_variables=["idea", "industry"],
        template="""Analyze this startup idea as a business consultant. Provide a professional, factual assessment (300+ words):

Startup Idea: {idea}
Industry: {industry}

Provide structured analysis:
1. Market Analysis - size, demand, trends
2. Competition Assessment - existing players, barriers
3. Business Model Viability - revenue streams, costs
4. Risk Factors - technical, market, financial risks
5. Implementation Strategy - concrete next steps
6. Success Metrics - KPIs to track

Be analytical, data-driven, and professional. Avoid creative language."""
    )
    
    try:
        chain = prompt | llm
        result = chain.invoke({"idea": idea, "industry": industry})
        return jsonify({"prophecy": result.content})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
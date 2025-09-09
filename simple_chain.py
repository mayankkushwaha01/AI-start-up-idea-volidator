from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from dotenv import load_dotenv

load_dotenv()

# Simple LangChain example with Gemini
llm = ChatGoogleGenerativeAI(model="gemini-pro", temperature=0.7)

prompt = PromptTemplate(
    input_variables=["topic"],
    template="Write a brief explanation about {topic}"
)

chain = LLMChain(llm=llm, prompt=prompt)

if __name__ == "__main__":
    topic = input("Enter a topic: ")
    result = chain.run(topic)
    print(f"\nResponse:\n{result}")
import subprocess
import sys

def run_streamlit():
    subprocess.run([sys.executable, "-m", "streamlit", "run", "langchain_app.py"])

def run_simple():
    subprocess.run([sys.executable, "simple_chain.py"])

if __name__ == "__main__":
    print("LangChain Options:")
    print("1. Streamlit Chat App")
    print("2. Simple Chain")
    
    choice = input("Choose (1 or 2): ")
    
    if choice == "1":
        run_streamlit()
    elif choice == "2":
        run_simple()
    else:
        print("Invalid choice")
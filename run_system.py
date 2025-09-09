import subprocess
import webbrowser
import time
import threading

def start_api():
    """Start the Flask API server"""
    print("Starting Flask API server...")
    subprocess.run(["python", "api.py"])

def start_frontend():
    """Open the frontend in browser"""
    time.sleep(2)  # Wait for API to start
    print("Opening IdeaForge frontend...")
    webbrowser.open("index.html")

def show_flowchart():
    """Open the system flowchart"""
    time.sleep(1)
    print("Opening system flowchart...")
    webbrowser.open("flowchart.html")

if __name__ == "__main__":
    print("Starting IdeaForge System...")
    
    # Start API in background thread
    api_thread = threading.Thread(target=start_api, daemon=True)
    api_thread.start()
    
    # Start frontend
    frontend_thread = threading.Thread(target=start_frontend, daemon=True)
    frontend_thread.start()
    
    # Show flowchart
    flowchart_thread = threading.Thread(target=show_flowchart, daemon=True)
    flowchart_thread.start()
    
    print("System running!")
    print("API: http://localhost:5000")
    print("Frontend: index.html")
    print("Flowchart: flowchart.html")
    
    try:
        # Keep main thread alive
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\nShutting down IdeaForge...")
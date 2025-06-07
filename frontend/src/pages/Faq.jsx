function Faq() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">What is this application about?</h2>
          <p>This application is designed to help users manage their tasks efficiently.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">How do I create a new task?</h2>
          <p>You can create a new task by clicking on the "Add Task" button in the dashboard.</p>
        </div>
      </div>
    </div>
  );
}
export default Faq;
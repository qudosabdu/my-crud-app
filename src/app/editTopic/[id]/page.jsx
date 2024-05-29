import EditTopicForm from "@/components/EditTopicForm"

const getTopicById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch topic");
    }

    return response.json();
  } catch (error) {
    console.log("Error loading topic", error);
  }
}

async function EditTopic({ params}) {
  const { id } = params;
  const topic = await getTopicById(id);
  console.log(topic);
  const { title, description } = topic;
  return <EditTopicForm title={title} description={description} id={id} />
  }
  
  export default EditTopic;
  
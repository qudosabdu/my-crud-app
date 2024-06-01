import EditTopicForm from "@/components/EditTopicForm"

const getTopicById = async (id) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/topics/${id}`, {
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
  
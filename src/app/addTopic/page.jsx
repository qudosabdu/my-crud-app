

function page() {
  return (
    <form className="flex flex-col gap-3">
        <input type="text" className="border border-slate-500 px-8 py-2" placeholder="Enter Topic" />
        <input type="text" className="border border-slate-500 px-8 py-2" placeholder="Enter Description" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-fit">Add Topic</button>
    </form>
  )
}

export default page

function env() {
  console.log(process.env.MONGODB_URI);
  return <div>Hello
    {
      process.env.NODE_ENV === 'development' ?
        <div>Development</div> :
        <div>Production</div>
    }
  </div>;
}

export default env;

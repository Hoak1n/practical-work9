import BlogCard from "./components/BlogCard";

const cardData = {
  image: "assets/images/Blog Image.png",
  category: "HTML & CSS",
  date: "Публікація 1 Вересня 2025",
  title: "Практична №3",
  description:
    "Мета практичної роботи полягає в тому,<br />щоб налаштувати середовище розробки<br /><strong>VS Code</strong>, а також реалізувати картку блогу<br />для вдосконалення фундаментальних<br />навичок з <strong>HTML та CSS.</strong>",
  authorImg: "assets/images/avatar_male.png",
  author: "<Фесенко Єгор>",
};

function App() {
  return (
    <>
      <BlogCard
        image={cardData.image}
        category={cardData.category}
        date={cardData.date}
        title={cardData.title}
        description={cardData.description}
        authorImg={cardData.authorImg}
        author={cardData.author}
      />
    </>
  );
}

export default App;

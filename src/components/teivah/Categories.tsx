interface Category {
  id: number;
  name: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "AQUÁRIOS",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "PEIXES",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "ACESSÓRIOS",
    image: "https://images.unsplash.com/photo-1584553421349-3557471bed79?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "PLANTAS",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

const Categories = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-[#e8f4f8] to-[#cce7f0] relative overflow-hidden">
      {/* Decorative bubbles */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute top-20 left-20 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-100"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-white/30 rounded-full animate-pulse delay-200"></div>
      <div className="absolute bottom-10 right-20 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-300"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Overlay with category name */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0066a0] to-[#0066a0]/80 py-3">
                <h3 className="text-white text-center font-bold text-lg tracking-wider">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

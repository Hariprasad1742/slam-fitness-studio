export default function GallerySection() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      alt: "Fitness Training"
    },
    {
      url: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      alt: "Group Training Session"
    },
    {
      url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      alt: "Fitness Equipment"
    },
    {
      url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      alt: "Personal Training"
    },
    {
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      alt: "Weight Training"
    }
  ];

  return (
    <section className="py-12 bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <img 
              key={index}
              src={image.url}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

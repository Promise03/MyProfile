import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Blog() {
  // Define your blog post data in an array
  const blogPosts = [
    {
      id: 1,
      image: "../../assets/blog1.png",
      date: "22 Oct 2020",
      comments: "246 comments",
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu"
    },
    {
      id: 2,
      image: "../../assets/blog2.png",
      date: "22 Oct 2020",
      comments: "246 comments",
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu"
    },
    {
      id: 3,
      image: "../../assets/blog3.png",
      date: "22 Oct 2020",
      comments: "246 comments",
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu"
    },
    {
      id: 4,
      image: "../../assets/blog4.png",
      date: "22 Oct 2020",
      comments: "246 comments",
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu"
    },
    {
      id: 5,
      image: "../../assets/blog1.png", // Reusing for demonstration, replace with unique if needed
      date: "22 Oct 2020",
      comments: "246 comments",
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu"
    },
    {
      id: 6,
      image: "../../assets/blog2.png", // Reusing for demonstration, replace with unique if needed
      date: "22 Oct 2020",
      comments: "246 comments",
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu"
    },
    {
      id: 7,
      image: "../../assets/blog3.png", // Reusing for demonstration, replace with unique if needed
      date: "22 Oct 2020",
      comments: "246 comments",
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu"
    },
    {
      id: 8,
      image: "../../assets/blog4.png", // Reusing for demonstration, replace with unique if needed
      date: "22 Oct 2020",
      comments: "246 comments",
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu"
    },
  ];

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500, // Corrected typo from 'seep' to 'speed'
    slidesToShow: 3, // Default for larger screens
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    fade: false,
    responsive: [
      {
        breakpoint: 1024, // lg breakpoint in Tailwind
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // md breakpoint in Tailwind
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0 // Start from the first slide on smaller screens
        }
      },
      {
        breakpoint: 480, // sm breakpoint in Tailwind (or custom)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='my-15'>
      {/* Blog Section Header */}
      <div className='text-center pb-5'>
        <h1 className='text-4xl font-medium mb-2'>Blogs</h1>
        <p className='text-[#87909D] max-w-xl mx-auto'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>
      </div>

      {/* Slider Container */}
      <div className='w-[90%] my-7 mx-auto'>
        <Slider {...settings}>
          {blogPosts.map(post => (
            <div key={post.id} className='px-2'> {/* Added px-2 for spacing between slides */}
              <div className='shadow-md rounded-lg overflow-hidden h-full flex flex-col'> {/* Added flex-col and h-full for consistent card height */}
                <img src={post.image} alt={post.title} className='w-full h-48 object-cover' />
                <div className='p-4 flex-grow'> {/* flex-grow ensures this div takes available space */}
                  <span className='text-sm text-[#87909D] block mb-2'> {/* Changed to text-sm and block for better control */}
                    {post.date} \ {post.comments}
                  </span>
                  <p className='font-semibold text-lg leading-tight'>{post.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
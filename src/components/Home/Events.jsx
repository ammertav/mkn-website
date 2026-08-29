const eventsData = [
  {
    id: 1,
    title: "Alumni | Beyond the Green Lounge: Dean Chilton in Conversation with Professor Alison L. LaCroix, Washington, DC",
    dateBadge: "9/23",
    dateTime: "Wednesday, September 23, 2026 @ 6:00pm — 8:00pm",
    faculty: "Participating faculty: Adam Chilton, Alison L. LaCroix",
    link: "#",
  },
  {
    id: 2,
    title: "Alumni | Beyond the Green Lounge: Dean Chilton in Conversation with Professor William H.J. Hubbard, Chicago",
    dateBadge: "9/24",
    dateTime: "Thursday, September 24, 2026 @ 6:00pm — 8:00pm",
    faculty: "Participating faculty: Adam Chilton, William H.J. Hubbard",
    link: "#",
  },
  {
    id: 3,
    title: "Spring 2026 Quarter Paper Deadline (non-grads)",
    dateBadge: "9/28",
    dateTime: "Monday, September 28, 2026 @ 5:00pm",
    faculty: null,
    link: "#",
  },
];

export default function Events() {

  return (
    <section className="w-full bg-white font-body py-16 sm:py-24 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-heading font-normal text-heading tracking-normal">
            Events
          </h2>
        </div>

        {/* 3-Column Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-start">
          {eventsData.map((item) => (
            <article key={item.id} className="flex flex-col justify-between h-full space-y-6 group">
              
              {/* Event Title */}
              <div>
                <h3 className="font-heading font-bold text-base 2xl:text-lg text-heading leading-snug group-hover:text-primary transition-colors cursor-pointer">
                  {item.title}
                </h3>
              </div>

              {/* Event Date & Info Container */}
              <div className="flex items-start space-x-4 sm:space-x-5 pt-2">
                
                {/* Circular Date Badge */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gray-200 bg-white shadow-md flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-base 2xl:text-lg text-heading">
                    {item.dateBadge}
                  </span>
                </div>

                {/* Event Schedule & Details */}
                <div className="space-y-1.5 pt-1 text-xs sm:text-sm text-body leading-relaxed">
                  <p className="font-medium text-heading">
                    {item.dateTime}
                  </p>
                  {item.faculty && (
                    <p className="text-xs text-body">
                      {item.faculty}
                    </p>
                  )}
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

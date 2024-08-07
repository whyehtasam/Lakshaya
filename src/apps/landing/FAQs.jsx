import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 p-1 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const FAQs = () => {
  const faqsList = [
    {
      q: "What courses do you offer?",
      a: "We offer a variety of courses including Mathematics, Physics, Chemistry, Biology, and Computer Science. Each course is designed to provide comprehensive knowledge and practical skills.",
    },
    {
      q: "Who are the instructors?",
      a: "Our instructors are highly qualified professionals with years of experience in their respective fields. They include research scholars, former lecturers, and industry experts.",
    },
    {
      q: "How can I enroll in a course?",
      a: "You can enroll in a course by visiting our website and filling out the enrollment form. Once submitted, our team will contact you with further instructions.",
    },
    {
      q: "What is the fee structure?",
      a: "The fee structure varies depending on the course and duration. Detailed information about the fees can be found on our website or by contacting our support team.",
    },
    {
      q: "How do I submit the fees?",
      a: "Fees can be submitted online through our secure payment gateway. We accept various payment methods including credit/debit cards, net banking, and UPI.",
    },
    {
      q: "Do you offer any discounts or scholarships?",
      a: "Yes, we offer various discounts and scholarships based on merit and financial need. Please visit our scholarships page for more information.",
    },
    {
      q: "What is the duration of the courses?",
      a: "The duration of the courses varies. Some courses are short-term, lasting a few weeks, while others are long-term, spanning several months. Detailed information is available on the course pages.",
    },
    {
      q: "Can I get a refund if I cancel my enrollment?",
      a: "Yes, we have a refund policy in place. If you cancel your enrollment within the specified period, you are eligible for a partial or full refund. Please refer to our refund policy for more details.",
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl  mx-auto  relative">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl sm:text-4xl text-gray-800 font-semibold ">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div
        className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
       
      ></div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx,index) => (
          <FaqsCard idx={idx} faqsList={item} key={index}/>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
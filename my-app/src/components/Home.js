import React, { useState } from "react";

export default function Home(props) {
  const UpClick = () => {
    console.log("Uppercase Cas Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Successfully Conveted In Uppercase.!", "Success");
  };

  const LoClick = () => {
    console.log("Uppercase Cas Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Successfully Conveted In Lowercase.!", "Success");
  };

  const allClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("All Cleared.!", "Success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied.!", "Alert");
  };

  const ExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
    props.showAlert("Removed All Spaces.!", "warning");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speak massage.!", "Success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const calculateChars = () => {
    const finalArray = text
      .trim()
      .split(/\s+/)
      .filter((s) => s.length >= 1);

    let count = 0;

    finalArray.forEach((s) => {
      count += s.length;
    });
    return count;
  };

  const calculateWords = () => {
    const finalArray = text
      .trim()
      .split(/\s+/)
      .filter((s) => s.length >= 1);

    return finalArray.length;
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container py-4">
        <div className="row header1">
          <div className=" col-lg-6 header">
            <h1>
              <b>
                Text analysis is the process of using computer systems to read
                and understand human-written text for business insights.
              </b>{" "}
            </h1>
            <br />
            <h3>
              {" "}
              Text analysis software can independently classify, sort, and
              extract information from text to identify patterns, relationships,
              sentiments, and other actionable knowledge.
            </h3>
          </div>
          <div className="col-lg-6">
            <img
              src="./Images/banner1.png"
              className="image image-flude"
              alt="Cinque Terre"
            />
          </div>
        </div>
        <button className="btn1">Try it here for free</button>
      </div>

      <div className="textform">
        <div className="container">
          <div className="middle">
            <h3>
              <b>Try Text Analyse now</b>
            </h3>

            <h4>
              Analyse your text free - right
              <br />
              here
            </h4>
          </div>
          <div className="row">
            <div className=" col-lg-8 mb-3">
              <textarea
                className="form-control"
                placeholder="Enter Text here"
                id="myBox"
                rows="9"
                onChange={handleOnChange}
                value={text}
              ></textarea>
            </div>
            <div className="col-lg-4 para ">
              <p>
                <b> Want more features or need to analyse a longer document?</b>
                <br />
                <br />
                Upgrade to a full subscription to analyse longer texts, export
                your data, access exclusive subscriber-only tools and benefit
                from full data security. Prices start at just £2.99 per month
                (around $4.50, about the same as a cup of coffee)
              </p>
            </div>
          </div>
          <button
            disabled={text.length === 0}
            className="btn1 mx-2"
            onClick={UpClick}
          >
            Upercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn1 mx-2"
            onClick={LoClick}
          >
            lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn1 mx-2"
            onClick={handleCopy}
          >
            Copy
          </button>
          <button
            disabled={text.length === 0}
            className="btn1 mx-2"
            onClick={ExtraSpaces}
          >
            Remove Spaces
          </button>
          <br />
          <button
            disabled={text.length === 0}
            type="submit"
            onClick={speak}
            className="btn1 mx-2 my-2"
          >
            Text Reader
          </button>
          <button
            disabled={text.length === 0}
            className="btn1 mx-2"
            onClick={allClear}
          >
            Clear
          </button>
        </div>
        <div className="container header2 my-3 pb-5">
          <h2>Your Text Summary</h2>
          <p>
            {text.length === 0 ? 0 : calculateWords()} Words and{" "}
            {calculateChars()} Charctors
          </p>
          <p>{0.008 * text.split("").length} Minutes Read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing  to preview.!"}</p>
        </div>
      </div>

      <div className="line">
        <p className="h4">Why use TextUtils?</p>
        <p className="p1"> Check the level of learners’ texts</p>
        <p className="p2">Design and create better learning materials</p>
        <p className="p3">Determine the CEFR level of a text</p>
        <p className="p4">Assess written texts more easily</p>
        <p className="p5">Conduct linguistics research</p>
        <p className="p6">Improve your use of English</p>
        <p className="p7">Gain insight into real-life language usage</p>
        <p className="p8">Select better learning materials for ESL students </p>
        <p className="p10">Understand real-world use of the English language</p>

        <p className="p9">Compare the difficulty levels of different texts</p>
        <button className="btn1 my-5">
          See examples of Text Utils in action
        </button>
      </div>

      <div className="slide">
        <h3 className="h3">What our users say</h3>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <figure>
                <blockquote className="blockquote">
                  <p className="reviewpara d-block w-100">
                    " I analysed three main textbooks used in secondary schools
                    in the region where I live to see how much key vocabulary
                    they shared. Thanks to TextUtils I discovered that the
                    vocabulary they had was from a disproportionately wide range
                    of levels, from A1 to C2.Thanks! Text Utils formed an
                    important part of the investigation."
                  </p>
                  <figcaption className="blockquote-footer text-center pt-2">
                    Tanmaym Wagh.
                  </figcaption>
                </blockquote>
              </figure>
            </div>
            <div className="carousel-item">
              <blockquote className="blockquote">
                <p className=" reviewpara d-block w-100">
                  " This system is ideal for language professionals, academics
                  and students conducting linguistic research. Overall, I found
                  Text Inspector to be a fascinating tool to explore. It is fast
                  and comprehensive, taking a matter of seconds to produce pages
                  of data, and it allows users to analyse reading, writing and
                  listening texts with great accuracy and reliability."
                </p>
                <figcaption className="blockquote-footer text-center pt-2">
                  som Harry.
                </figcaption>
              </blockquote>
            </div>
            <div className="carousel-item">
              <blockquote className="blockquote">
                <p className=" reviewpara d-block w-100">
                  " Text analytics combines a set of machine learning,
                  statisticaland linguistic techniques to process large volumes
                  of unstructured text or text that does not have a predefined
                  format, to derive insights and patterns."
                </p>
                <figcaption className="blockquote-footer text-center pt-2">
                  Akash Sony.
                </figcaption>
              </blockquote>
            </div>
          </div>

          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              class="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      <div className="conatiner-flude header3">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="h2">Why analyse vocabulary?</h2>
            <br />
            <p>Vocabulary forms the core building blocks of language.</p>
            <p>
              A rich vocabulary makes the four core skills of speaking,
              listening, reading and writing easier and without it, learners
              can’t understand language, express themselves or be understood.
            </p>
            <blockquote className="blockquote1">
              <p className="px-3">
                <em>
                  In the words of renowned British linguist,
                  <strong> David Wilkins; </strong>
                  “…while without grammar very little can be conveyed, without
                  vocabulary nothing can be conveyed”
                </em>
              </p>
            </blockquote>
            <button className="btn1 mx-0 my-5">Find out more</button>
          </div>
          <div className="col-lg-6">
            <img
              src="./Images/banner2.png"
              className="image1 image-flude"
              alt="Cinque Terre"
            />
          </div>
        </div>
      </div>
    </>
  );
}

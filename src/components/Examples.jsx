import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
  //let tabContent = "please select";
    let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  function handleSelect(selectedButton) {
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
    // tabContent = selectedButton;
  }
    return (
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* if we want to define a function which needs to be executed upon an event but also want to control how it's going to be called and which args are goinf to be passed*/}
            <TabButton
              isSelected={selectedTopic == "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
            {/*
            <TabButton onSelect={handleSelect}>State</TabButton>
            children will receive what ever passed between the component Tag
            <TabButton>
              This text is not shown in UI as react will not know where to
              display this so we use props
            </TabButton>
            <TabButton>
              Children props will add what ever text between here as a child to
              that prop and print
            </TabButton>
            */}
          </menu>
          {tabContent}

          {/*{!selectedTopic ? <p> Please select a topic.</p> : null}

          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}*/}
        </section>
    );
}
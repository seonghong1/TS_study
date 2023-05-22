interface Validatable{
    value:string | number,
    required?: boolean,
    minLength?: number,
    maxLength?:number
    min?:number
    max?:number
}
function validate(valudatableInput:Validatable){
    let isValud = true
    if(valudatableInput.required){
        if(typeof valudatableInput.value == 'string'){
            isValud = isValud && valudatableInput.value.toString().trim().length !== 0
        }
    }
    return isValud
}

// autobind decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  console.log(originalMethod, "originalMethod");
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = <HTMLTemplateElement>(
      document.getElementById("project-input")
    );
    this.hostElement = <HTMLDivElement>document.getElementById("app");

    const importNode = document.importNode(this.templateElement.content, true);
    this.element = <HTMLFormElement>importNode.firstElementChild;
    this.element.id = "user-input";

    this.titleInputElement = <HTMLInputElement>(
      this.element.querySelector("#title")
    );
    this.descriptionInputElement = <HTMLInputElement>(
      this.element.querySelector("#description")
    );
    this.peopleInputElement = <HTMLInputElement>(
      this.element.querySelector("#people")
    );

    this.configure();
    this.attach();
  }

  private gatherUserInput(): [string, string, number] | undefined {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    if (
        validate({value:enteredTitle, required:true, minLength: 5})&&
        validate({value:enteredDescription, required:true, minLength: 5})&&
        validate({value:enteredPeople, required:true, minLength: 5})&&
    ) {
      alert("invalid input");``
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log(title, desc, people);
      this.clearInputs();
    }
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();

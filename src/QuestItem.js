import {useState} from "react";
export default function QuestItem(props) {

  const [title, setTitle] = useState(props.quest.title);
 
  const [checked, setChecked] = useState(false);
 
  const [editMode, setEditMode] = useState(false);

  const concluded = props.quest.status === "concluido";

   return (
    <div data-testid="questItem" className="flex gap-4 flex-col md:flex-row items-center">
      <div className="flex gap-4 items-center w-full sm:w-[80%]">
        <input
          disabled={concluded}
          type="checkbox"
          checked={checked}
          className="checkbox rounded-full border"
          onChange={() => {
            if (concluded) return;
            else {
              setChecked(!checked);
              props.saveConcludedQuest(props.quest);
            }
          }}
        />

          {editMode && !concluded ? (
           <input
            data-testid="input"
            placeholder="quest"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-full bg-secondary pl-2 w-full input-sm flex focus:outline-none"
          />
        ) : (
          <p data-testid="title" className={`break-words ${concluded ? "line-through" : ""}`}>
            {props.quest.title}
          </p>
        )}
      </div>
        
      {!concluded && (
        <div data-testid="buttons" className="flex gap-4 w-full sm:w-fit justify-center">
          <button
            data-testid="editButton"
            className="bnt-edit"
            onClick={() => {
              if (editMode) props.saveEditQuest(props.quest, title);
              setEditMode(!editMode);
            }}
          >
            Editar
          </button>

          <button
            data-testid="deleteButton"
            className="btn-delete"
            onClick={() => {
              if (concluded) return;
              else props.saveDeleteQuest(props.quest);
            }}
          >
            Excluir
          </button>
        </div>
      )}
    </div>
  );
}
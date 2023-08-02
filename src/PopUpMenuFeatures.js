import calendar from './icon-calendar.svg'
import planning from './icon-planning.svg'
import reminders from './icon-reminders.svg'
import todo from './icon-todo.svg'

export const PopUpMenu = () => {
    return (
      <div className="popup-menu Features" >
        <ul>
          <li><img src={todo} alt="logo"></img> Todo List</li>
          <li><img src={calendar} alt="logo"></img> Calendar</li>
          <li><img src={reminders} alt="logo"></img> Reminders</li>
          <li><img src={planning} alt="logo"></img> Plannig</li>
        </ul>
      </div>
    );
  };
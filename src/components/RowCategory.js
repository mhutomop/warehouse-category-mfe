import React from "react";

class RowCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEditButtonClicked(category) {
    this.props.replaceModalItem(category, true, 'edit');
  }

  handleDeleteButtonClicked(category) {
    this.props.replaceModalItem(category, true, 'delete');
  }

  render() {
    return (
      <React.Fragment>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-6 py-4">{this.props.index+1}</td>
          <td className="whitespace-nowrap px-6 py-4">{this.props.category.name}</td>
          <td className="whitespace-nowrap px-6 py-4">{this.props.category.description}</td>
          <td>
            <button
              className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
              onClick={() => { this.handleEditButtonClicked(this.props.category) }}>Edit
            </button>
            <button
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => { this.handleDeleteButtonClicked(this.props.category) }}>Delete
            </button>
          </td>
        </tr>
      </React.Fragment>
    )
  }
}

export default RowCategory;
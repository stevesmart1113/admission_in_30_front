<template>
  <div class="container-fluid">
    <div class="row page-titles mx-0">
      <div class="col-sm-6 p-md-0">
        <div class="welcome-text">
          <h4>Approvals</h4>
          <p class="mb-0">Your business dashboard template</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-sm mb-0">
                <thead>
                  <tr>
                    <th class="align-middle">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="checkAll"
                        />
                        <label
                          class="custom-control-label"
                          for="checkAll"
                        ></label>
                      </div>
                    </th>
                    <th class="align-middle">STUDENT</th>
                    <th class="align-middle pr-7">REQUEST DATE</th>
                    <th class="align-middle" style="min-width: 12.5rem;">
                      INSTITUTION
                    </th>
                    <th class="align-middle text-right">STATUS</th>
                    <th class="align-middle text-right">AMOUNT</th>
                    <th class="no-sort"></th>
                  </tr>
                </thead>
                <tbody id="orders">
                  <tr class="btn-reveal-trigger">
                    <td class="py-2">
                      <div
                        class="custom-control custom-checkbox checkbox-success"
                      >
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="checkbox"
                        />
                        <label
                          class="custom-control-label"
                          for="checkbox"
                        ></label>
                      </div>
                    </td>
                    <td class="py-2">
                      <a href="#"> <strong>#181</strong></a> by
                      <strong>Ricky Antony</strong><br /><a
                        href="mailto:ricky@example.com"
                        >ricky@example.com</a
                      >
                    </td>
                    <td class="py-2">20/04/2020</td>
                    <td class="py-2">
                      Harvard University
                      <p class="mb-0 text-500">Business Admission</p>
                    </td>
                    <td class="py-2 text-right">
                      <span class="badge badge-success"
                        >Completed<span class="ml-1 fa fa-check"></span
                      ></span>
                    </td>
                    <td class="py-2 text-right">$100</td>
                    <td class="py-2 text-right">
                      <div class="dropdown text-sans-serif">
                        <button
                          class="btn btn-primary tp-btn-light sharp"
                          type="button"
                          id="order-dropdown-0"
                          data-toggle="dropdown"
                          data-boundary="viewport"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              width="18px"
                              height="18px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <circle
                                  fill="#000000"
                                  cx="5"
                                  cy="12"
                                  r="2"
                                ></circle>
                                <circle
                                  fill="#000000"
                                  cx="12"
                                  cy="12"
                                  r="2"
                                ></circle>
                                <circle
                                  fill="#000000"
                                  cx="19"
                                  cy="12"
                                  r="2"
                                ></circle>
                              </g></svg
                          ></span>
                        </button>
                        <div
                          class="dropdown-menu dropdown-menu-right border py-0"
                          aria-labelledby="order-dropdown-0"
                        >
                          <div class="py-2">
                            <a class="dropdown-item" href="#!">Completed</a
                            ><a class="dropdown-item" href="#!">Processing</a
                            ><a class="dropdown-item" href="#!">On Hold</a
                            ><a class="dropdown-item" href="#!">Pending</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#!"
                              >Delete</a
                            >
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="btn-reveal-trigger">
                    <td class="py-2">
                      <div class="custom-control custom-checkbox ">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="checkbox1"
                        />
                        <label
                          class="custom-control-label"
                          for="checkbox1"
                        ></label>
                      </div>
                    </td>
                    <td class="py-2">
                      <a href="#"> <strong>#182</strong></a> by
                      <strong>Kin Rossow</strong><br /><a
                        href="mailto:kin@example.com"
                        >kin@example.com</a
                      >
                    </td>
                    <td class="py-2">20/04/2020</td>
                    <td class="py-2">
                      Stanford University
                      <p class="mb-0 text-500">Computer Engineering</p>
                    </td>
                    <td class="py-2 text-right">
                      <span class="badge badge-primary"
                        >Processing<span class="ml-1 fa fa-redo"></span
                      ></span>
                    </td>
                    <td class="py-2 text-right">$100</td>
                    <td class="py-2 text-right">
                      <div class="dropdown text-sans-serif">
                        <button
                          class="btn btn-primary tp-btn-light sharp"
                          type="button"
                          id="order-dropdown-0"
                          data-toggle="dropdown"
                          data-boundary="viewport"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              width="18px"
                              height="18px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <circle
                                  fill="#000000"
                                  cx="5"
                                  cy="12"
                                  r="2"
                                ></circle>
                                <circle
                                  fill="#000000"
                                  cx="12"
                                  cy="12"
                                  r="2"
                                ></circle>
                                <circle
                                  fill="#000000"
                                  cx="19"
                                  cy="12"
                                  r="2"
                                ></circle>
                              </g></svg
                          ></span>
                        </button>
                        <div
                          class="dropdown-menu dropdown-menu-right border py-0"
                          aria-labelledby="order-dropdown-0"
                        >
                          <div class="py-2">
                            <a class="dropdown-item" href="#!">Completed</a
                            ><a class="dropdown-item" href="#!">Processing</a
                            ><a class="dropdown-item" href="#!">On Hold</a
                            ><a class="dropdown-item" href="#!">Pending</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#!"
                              >Delete</a
                            >
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="btn-reveal-trigger">
                    <td class="py-2">
                      <div
                        class="custom-control custom-checkbox checkbox-secondary"
                      >
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="checkbox7"
                        />
                        <label
                          class="custom-control-label"
                          for="checkbox7"
                        ></label>
                      </div>
                    </td>
                    <td class="py-2">
                      <a href="#"> <strong>#188</strong></a> by
                      <strong>Brate Lee</strong><br /><a
                        href="mailto:lee@example.com"
                        >lee@example.com</a
                      >
                    </td>
                    <td class="py-2">29/04/2020</td>
                    <td class="py-2">
                      Harvard University
                      <p class="mb-0 text-500">Computer Science</p>
                    </td>
                    <td class="py-2 text-right">
                      <span class="badge badge-secondary"
                        >On Hold<span class="ml-1 fa fa-ban"></span
                      ></span>
                    </td>
                    <td class="py-2 text-right">$90</td>
                    <td class="py-2 text-right">
                      <div class="dropdown text-sans-serif">
                        <button
                          class="btn btn-primary tp-btn-light sharp"
                          type="button"
                          id="order-dropdown-0"
                          data-toggle="dropdown"
                          data-boundary="viewport"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              width="18px"
                              height="18px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <circle
                                  fill="#000000"
                                  cx="5"
                                  cy="12"
                                  r="2"
                                ></circle>
                                <circle
                                  fill="#000000"
                                  cx="12"
                                  cy="12"
                                  r="2"
                                ></circle>
                                <circle
                                  fill="#000000"
                                  cx="19"
                                  cy="12"
                                  r="2"
                                ></circle>
                              </g></svg
                          ></span>
                        </button>
                        <div
                          class="dropdown-menu dropdown-menu-right border py-0"
                          aria-labelledby="order-dropdown-0"
                        >
                          <div class="py-2">
                            <a class="dropdown-item" href="#!">Completed</a
                            ><a class="dropdown-item" href="#!">Processing</a
                            ><a class="dropdown-item" href="#!">On Hold</a
                            ><a class="dropdown-item" href="#!">Pending</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#!"
                              >Delete</a
                            >
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="btn-reveal-trigger">
                    <td class="py-2">
                      <div class="custom-control custom-checkbox ">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="checkbox8"
                        />
                        <label
                          class="custom-control-label"
                          for="checkbox8"
                        ></label>
                      </div>
                    </td>
                    <td class="py-2">
                      <a href="#"> <strong>#189</strong></a> by
                      <strong>Thomas Stephenson</strong><br /><a
                        href="mailto:Stephenson@example.com"
                        >Stephenson@example.com</a
                      >
                    </td>
                    <td class="py-2">29/04/2020</td>
                    <td class="py-2">
                      University of Carlifonia
                      <p class="mb-0 text-500">Business management</p>
                    </td>
                    <td class="py-2 text-right">
                      <span class="badge badge-primary"
                        >Processing<span class="ml-1 fa fa-redo"></span
                      ></span>
                    </td>
                    <td class="py-2 text-right">$100</td>
                    <td class="py-2 text-right">
                      <div class="dropdown text-sans-serif">
                        <button
                          class="btn btn-primary tp-btn-light sharp"
                          type="button"
                          id="order-dropdown-0"
                          data-toggle="dropdown"
                          data-boundary="viewport"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              width="18px"
                              height="18px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <circle
                                  fill="#000000"
                                  cx="5"
                                  cy="12"
                                  r="2"
                                ></circle>
                                <circle
                                  fill="#000000"
                                  cx="12"
                                  cy="12"
                                  r="2"
                                ></circle>
                                <circle
                                  fill="#000000"
                                  cx="19"
                                  cy="12"
                                  r="2"
                                ></circle>
                              </g></svg
                          ></span>
                        </button>
                        <div
                          class="dropdown-menu dropdown-menu-right border py-0"
                          aria-labelledby="order-dropdown-0"
                        >
                          <div class="py-2">
                            <a class="dropdown-item" href="#!">Completed</a
                            ><a class="dropdown-item" href="#!">Processing</a
                            ><a class="dropdown-item" href="#!">On Hold</a
                            ><a class="dropdown-item" href="#!">Pending</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#!"
                              >Delete</a
                            >
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Approvals',
};
</script>
<style scoped></style>

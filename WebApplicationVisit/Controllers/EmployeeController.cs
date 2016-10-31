﻿using Aplication_Visit.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Aplication_Visit.Controllers
{
    public class EmployeeController : Controller
    {
        CtrlEmployee contEmployee = new CtrlEmployee();
        // GET: Employee
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Employee()
        {
            return View();
        }
        public JsonResult ListUserSelect(DtoEmployee emp) {
            return Json(contEmployee.listEmployeeSelect(emp),JsonRequestBehavior.AllowGet);
        }
        public JsonResult ListEmployee(DtoEmployee emp)
        {
            List<DtoEmployee> list = null;
            if (emp.bEmp_type_select)
            {
                list = contEmployee.ListEmployee(emp);
            }
            else {
                list = contEmployee.ListEmployeeSelect(emp);
            }

            return Json(list, JsonRequestBehavior.AllowGet);
        }
        public JsonResult ListUserSelectRole()
        {
            return Json(contEmployee.listRoleEmployee(), JsonRequestBehavior.AllowGet);
        }
        public JsonResult ListUserSelectPermission()
        {
            return Json(contEmployee.listPermissionEmployee(), JsonRequestBehavior.AllowGet);
        }
        public JsonResult EmployeeDelete(DtoEmployee emp)
        {
            return Json(contEmployee.deleteEmployee(emp), JsonRequestBehavior.AllowGet);
        }
    }
}
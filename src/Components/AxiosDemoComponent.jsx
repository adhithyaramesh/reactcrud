import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Container,
  List,
  ListItem,
  Snackbar,
  TextField,
  Typography
} from "@mui/material";
import { addUser, fetchUsers, updateUser, deleteUser } from "../axios/axiosClient";

export const AxiosDemoComponent = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [updatedUser, setUpdatedUser] = useState({ id: "", name: "", email: "" });
  const [deleteUserId, setDeleteUserId] = useState("");
  const [snackbarOpen, setSnackBarOpen] = useState(false);
  const [snackbarMessage, setSnackBarMessage] = useState("");

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSnackBarClose = () => {
    setSnackBarOpen(false);
  };

  const handleAddUser = async () => {
    if (!newUser.name || !newUser.email) {
      setSnackBarMessage("Please enter both name and email");
      setSnackBarOpen(true);
      return;
    }
    try {
      const addedUser = await addUser(newUser);
      setUsers([...users, addedUser]);
      setNewUser({ name: "", email: "" });
      setSnackBarMessage("User added successfully");
      setSnackBarOpen(true);
    } catch (error) {
      console.error("Error adding user:", error);
      setSnackBarMessage("Error adding user");
      setSnackBarOpen(true);
    }
  };

  const handleUpdateUser = async () => {
    if (!updatedUser.id || isNaN(updatedUser.id)) {
      setSnackBarMessage("Please enter a valid user ID to update.");
      setSnackBarOpen(true);
      return;
    }

    try {
      const updatedData = await updateUser(updatedUser.id, {
        name: updatedUser.name,
        email: updatedUser.email,
      });

      const updatedUsers = users.map((user) =>
        user.id === parseInt(updatedUser.id) ? updatedData : user
      );

      setUsers(updatedUsers);
      setUpdatedUser({ id: "", name: "", email: "" });
      setSnackBarMessage("User updated successfully");
      setSnackBarOpen(true);
    } catch (error) {
      console.error("Error updating user:", error);
      setSnackBarMessage("Error updating user.");
      setSnackBarOpen(true);
    }
  };

  const handleDeleteUser = async () => {
    if (!deleteUserId || isNaN(deleteUserId)) {
      setSnackBarMessage("Please enter a valid user ID to delete.");
      setSnackBarOpen(true);
      return;
    }

    try {
      await deleteUser(deleteUserId);
      const filteredUsers = users.filter(
        (user) => user.id !== parseInt(deleteUserId)
      );
      setUsers(filteredUsers);
      setDeleteUserId("");
      setSnackBarMessage("User deleted successfully");
      setSnackBarOpen(true);
    } catch (error) {
      console.error("Error deleting user:", error);
      setSnackBarMessage("Error deleting user.");
      setSnackBarOpen(true);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <Container>
        <Typography sx={{textAlign:"center", fontWeight:"bold"}}>User Management</Typography>

        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              border: "1px solid #ddd",
              padding: "12px",
              maxHeight: "475px",
            }}
          >
            <Typography>User List</Typography>
            <List>
              {users.map((user) => (
                <ListItem key={user.id}>
                  {user.id} - {user.name} - {user.email}
                </ListItem>
              ))}
            </List>
          </div>

          <div
            style={{
              flex: 1,
              border: "1px solid #ddd",
              padding: "10px",
              maxHeight: "570px",
              // overflowY: "auto",
            }}
          >
            <div>
              <Typography>Add User</Typography>
              <TextField
                label="Name"
                value={newUser.name}
                size="small"
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <TextField
                label="Email"
                value={newUser.email}
                size="small"
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <div style={{ textAlign: "center", marginTop: "4px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddUser}
                >
                  Add User
                </Button>
              </div>
            </div>

            <div style={{ marginTop: " 1px" }}>
              <Typography>Update User</Typography>
              <TextField
                label="User ID"
                value={updatedUser.id}
                size="small"
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, id: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <TextField
                label="New Name"
                value={updatedUser.name}
                size="small"
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, name: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <TextField
                label="New Email"
                value={updatedUser.email}
                size="small"
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, email: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <div style={{ textAlign: "center", marginTop: "4px" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleUpdateUser}
                >
                  Update User
                </Button>
              </div>
            </div>

            <div style={{ marginTop: "1px" }}>
              <Typography>Delete User</Typography>
              <TextField
                label="User ID"
                value={deleteUserId}
                size="small"
                onChange={(e) => setDeleteUserId(e.target.value)}
                fullWidth
                margin="dense"
              />
              <div style={{ textAlign: "center", marginTop: "4px" }}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleDeleteUser}
                >
                  Delete User
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Snackbar
          open={snackbarOpen}
          onClose={handleSnackBarClose}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleSnackBarClose}
            severity="info"
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
};

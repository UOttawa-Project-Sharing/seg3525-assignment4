import React from "react";
import { Button, Form } from "react-bootstrap";

export default function SurveyPopup({ show, survey, setSurvey, onClose, onSubmit }) {
  if (!show) return null;
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.4)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#fff", borderRadius: 12, width: 350, padding: 24, boxShadow: "0 2px 16px #0002" }}>
        <div className="text-center mb-2">
          <h4 className="mt-2">We value your feedback!</h4>
          <p className="mb-0">Please rate your experience.</p>
        </div>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Rating</Form.Label>
            <div>
              {[1, 2, 3, 4, 5].map((n) => (
                <Button
                  key={n}
                  variant={survey.rating >= n ? "warning" : "outline-secondary"}
                  size="sm"
                  className="me-1"
                  onClick={() => setSurvey((s) => ({ ...s, rating: n }))}
                >
                  ★
                </Button>
              ))}
            </div>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Comments</Form.Label>
            <Form.Control as="textarea" rows={2} value={survey.comment} onChange={e => setSurvey(s => ({ ...s, comment: e.target.value }))} />
          </Form.Group>
          <div className="d-flex justify-content-between mt-3">
            <Button variant="secondary" onClick={onClose}>Close</Button>
            <Button variant="success" onClick={onSubmit} disabled={!survey.rating}>Submit</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

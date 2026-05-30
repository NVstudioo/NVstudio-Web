// Regex Patterns
export const REGEX_PATTERNS = {
  // Standard email pattern
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  // Gmail specific pattern
  gmail: /^[a-zA-Z0-9._-]{1,30}@gmail\.com$/,

  // Phone patterns for different formats
  phone: /^(\+?\d{1,3}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,

  // Azerbaijan phone format: +994 XX XXX XX XX or 0XX XXX XX XX
  phoneAZ: /^(\+994|0)\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}$/,

  // International phone format with spaces/dashes
  phoneInternational:
    /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,

  fullName: /^[a-zA-ZəığşüçöÉ\s]{2,}$/,
  message: /^.{10,500}$/,
};

// Validation Error Messages
export const VALIDATION_MESSAGES = {
  fullName: {
    required: "Full name is required",
    invalid: "Name must be at least 2 characters and contain only letters",
  },
  email: {
    required: "Email is required",
    invalid: "Please enter a valid email address",
  },
  phone: {
    required: "Phone number is required",
    invalid: "Please enter a valid phone number",
  },
  service: {
    required: "Please select a service",
  },
  message: {
    required: "Message is required",
    invalid: "Message must be between 10 and 500 characters",
  },
};

// Validation Functions
export const validateFullName = (value: string): boolean => {
  if (!value.trim()) return false;
  return REGEX_PATTERNS.fullName.test(value.trim());
};

// Validate standard email
export const validateEmail = (value: string): boolean => {
  if (!value.trim()) return false;
  return REGEX_PATTERNS.email.test(value.trim());
};

// Validate Gmail specifically
export const validateGmail = (value: string): boolean => {
  if (!value.trim()) return false;
  return REGEX_PATTERNS.gmail.test(value.trim());
};

// Validate phone - tries multiple formats
export const validatePhone = (value: string): boolean => {
  if (!value.trim()) return false;
  const trimmed = value.trim();

  // Try Azerbaijan format first
  if (REGEX_PATTERNS.phoneAZ.test(trimmed)) return true;

  // Try international format
  if (REGEX_PATTERNS.phoneInternational.test(trimmed)) return true;

  // Try generic format
  if (REGEX_PATTERNS.phone.test(trimmed)) return true;

  return false;
};

// Validate Azerbaijan phone format specifically
export const validatePhoneAZ = (value: string): boolean => {
  if (!value.trim()) return false;
  return REGEX_PATTERNS.phoneAZ.test(value.trim());
};

export const validateService = (value: string): boolean => {
  return value.trim() !== "";
};

export const validateMessage = (value: string): boolean => {
  if (!value.trim()) return false;
  return REGEX_PATTERNS.message.test(value.trim());
};

// Validate All Fields
export const validateForm = (formData: {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!formData.fullName.trim()) {
    errors.fullName = VALIDATION_MESSAGES.fullName.required;
  } else if (!validateFullName(formData.fullName)) {
    errors.fullName = VALIDATION_MESSAGES.fullName.invalid;
  }

  if (!formData.email.trim()) {
    errors.email = VALIDATION_MESSAGES.email.required;
  } else if (!validateEmail(formData.email)) {
    errors.email = VALIDATION_MESSAGES.email.invalid;
  }

  if (!formData.phone.trim()) {
    errors.phone = VALIDATION_MESSAGES.phone.required;
  } else if (!validatePhone(formData.phone)) {
    errors.phone = VALIDATION_MESSAGES.phone.invalid;
  }

  if (!validateService(formData.service)) {
    errors.service = VALIDATION_MESSAGES.service.required;
  }

  if (!formData.message.trim()) {
    errors.message = VALIDATION_MESSAGES.message.required;
  } else if (!validateMessage(formData.message)) {
    errors.message = VALIDATION_MESSAGES.message.invalid;
  }

  return errors;
};

// Format phone number with spaces (for display)
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");

  // Azerbaijan format: +994 XX XXX XX XX
  if (cleaned.startsWith("994")) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8, 10)} ${cleaned.slice(10, 12)}`;
  }

  // Local format: 0XX XXX XX XX
  if (cleaned.startsWith("0")) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8, 10)}`;
  }

  return phone;
};
